-- Fix security definer view by converting to a regular view
DROP VIEW IF EXISTS public.admin_statistics;

-- Create a function to get admin statistics that checks permissions
CREATE OR REPLACE FUNCTION public.get_admin_statistics()
RETURNS TABLE (
  total_users BIGINT,
  total_reviews BIGINT,
  total_messages BIGINT,
  average_rating NUMERIC,
  reviews_this_week BIGINT,
  messages_this_week BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow admins to access this
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Access denied: Admin role required';
  END IF;
  
  RETURN QUERY
  SELECT
    (SELECT COUNT(*) FROM public.profiles)::BIGINT,
    (SELECT COUNT(*) FROM public.reviews)::BIGINT,
    (SELECT COUNT(*) FROM public.messages)::BIGINT,
    (SELECT AVG(rating)::NUMERIC FROM public.reviews),
    (SELECT COUNT(*) FROM public.reviews WHERE created_at > NOW() - INTERVAL '7 days')::BIGINT,
    (SELECT COUNT(*) FROM public.messages WHERE created_at > NOW() - INTERVAL '7 days')::BIGINT;
END;
$$;