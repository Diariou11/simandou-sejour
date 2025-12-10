import { Header } from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Building2, MessageSquare, Star, TrendingUp, Shield, 
  Search, MoreVertical, Check, X, Eye, Trash2, ChevronLeft,
  BarChart3, AlertTriangle, UserCog, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import gradientBg2 from '@/assets/gradient-bg-2.jpg';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Mock data
const mockUsers = [
  { id: '1', name: 'Mamadou Diallo', email: 'mamadou@email.com', role: 'user', status: 'active', joinDate: '2024-01-15' },
  { id: '2', name: 'Fatoumata Bah', email: 'fatoumata@email.com', role: 'host', status: 'active', joinDate: '2024-02-20' },
  { id: '3', name: 'Ibrahim Camara', email: 'ibrahim@email.com', role: 'user', status: 'suspended', joinDate: '2024-03-10' },
  { id: '4', name: 'Aissatou Sow', email: 'aissatou@email.com', role: 'moderator', status: 'active', joinDate: '2024-04-05' },
];

const mockAccommodations = [
  { id: '1', name: 'Hôtel Fouta Djallon', host: 'Fatoumata Bah', status: 'active', rating: 4.8, reviews: 124 },
  { id: '2', name: 'Résidence Nimba', host: 'Mohamed Keita', status: 'pending', rating: 4.5, reviews: 89 },
  { id: '3', name: 'Auberge Tinkisso', host: 'Kadiatou Barry', status: 'active', rating: 4.2, reviews: 56 },
];

const mockPendingReviews = [
  { id: '1', user: 'Mamadou D.', accommodation: 'Hôtel Fouta Djallon', rating: 5, comment: 'Excellent séjour !', date: '2024-11-10' },
  { id: '2', user: 'Ibrahim C.', accommodation: 'Résidence Nimba', rating: 2, comment: 'Service décevant...', date: '2024-11-09' },
  { id: '3', user: 'Aissatou S.', accommodation: 'Auberge Tinkisso', rating: 4, comment: 'Très bon rapport qualité-prix', date: '2024-11-08' },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  const handleApproveReview = (id: string) => {
    toast({ title: t('reviewApproved'), description: t('reviewApprovedDesc') });
  };

  const handleRejectReview = (id: string) => {
    toast({ title: t('reviewRejected'), description: t('reviewRejectedDesc') });
  };

  const handleChangeRole = (userId: string, newRole: string) => {
    toast({ title: t('roleUpdated'), description: `${t('roleUpdatedDesc')} ${newRole}` });
  };

  const handleSuspendUser = (userId: string) => {
    toast({ title: t('userSuspended'), description: t('userSuspendedDesc') });
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="absolute inset-0 z-0">
        <img src={gradientBg2} alt="" className="w-full h-full object-cover opacity-20 fixed" />
      </div>
      
      <div className="relative z-10 pt-20 px-4">
        <div className="container mx-auto max-w-7xl py-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/host-home')}
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                {t('back')}
              </Button>
              <div>
                <h1 className="text-2xl md:text-3xl font-black text-foreground flex items-center gap-2">
                  <Shield className="h-8 w-8 text-primary" />
                  {t('adminDashboard')}
                </h1>
                <p className="text-sm text-muted-foreground">{t('adminDashboardDesc')}</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,234</p>
                  <p className="text-xs text-muted-foreground">{t('totalUsers')}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">89</p>
                  <p className="text-xs text-muted-foreground">{t('accommodations')}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2,456</p>
                  <p className="text-xs text-muted-foreground">{t('totalReviews')}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+23%</p>
                  <p className="text-xs text-muted-foreground">{t('growthThisMonth')}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-lg">
              <TabsTrigger value="overview" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">{t('overview')}</span>
              </TabsTrigger>
              <TabsTrigger value="users" className="gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">{t('users')}</span>
              </TabsTrigger>
              <TabsTrigger value="accommodations" className="gap-2">
                <Building2 className="h-4 w-4" />
                <span className="hidden sm:inline">{t('accommodations')}</span>
              </TabsTrigger>
              <TabsTrigger value="reviews" className="gap-2">
                <Star className="h-4 w-4" />
                <span className="hidden sm:inline">{t('reviews')}</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      {t('pendingActions')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center justify-between p-3 bg-amber-500/10 rounded-lg">
                      <span className="text-sm">{t('pendingReviews')}</span>
                      <Badge className="bg-amber-500">12</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg">
                      <span className="text-sm">{t('pendingAccommodations')}</span>
                      <Badge className="bg-blue-500">5</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                      <span className="text-sm">{t('reportedContent')}</span>
                      <Badge className="bg-red-500">3</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      {t('recentActivity')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{t('newUserRegistered')}</p>
                        <p className="text-xs text-muted-foreground">{t('minutesAgo', { count: 5 })}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{t('newReviewSubmitted')}</p>
                        <p className="text-xs text-muted-foreground">{t('minutesAgo', { count: 15 })}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder={t('searchUsers')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('name')}</TableHead>
                      <TableHead>{t('email')}</TableHead>
                      <TableHead>{t('role')}</TableHead>
                      <TableHead>{t('status')}</TableHead>
                      <TableHead>{t('joinDate')}</TableHead>
                      <TableHead className="text-right">{t('actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleChangeRole(user.id, 'moderator')}>
                                <UserCog className="h-4 w-4 mr-2" />
                                {t('changeRole')}
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleSuspendUser(user.id)}>
                                <X className="h-4 w-4 mr-2" />
                                {t('suspend')}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Accommodations Tab */}
            <TabsContent value="accommodations" className="space-y-4">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t('name')}</TableHead>
                      <TableHead>{t('host')}</TableHead>
                      <TableHead>{t('status')}</TableHead>
                      <TableHead>{t('rating')}</TableHead>
                      <TableHead>{t('reviews')}</TableHead>
                      <TableHead className="text-right">{t('actions')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAccommodations.map((acc) => (
                      <TableRow key={acc.id}>
                        <TableCell className="font-medium">{acc.name}</TableCell>
                        <TableCell>{acc.host}</TableCell>
                        <TableCell>
                          <Badge className={acc.status === 'active' ? 'bg-green-500' : 'bg-amber-500'}>
                            {acc.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-accent fill-accent" />
                          {acc.rating}
                        </TableCell>
                        <TableCell>{acc.reviews}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-4">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-lg">{t('pendingReviewModeration')}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  {mockPendingReviews.map((review) => (
                    <div key={review.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <p className="text-sm text-muted-foreground">{review.accommodation}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mb-3">{review.comment}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-green-500 border-green-500"
                            onClick={() => handleApproveReview(review.id)}
                          >
                            <Check className="h-4 w-4 mr-1" />
                            {t('approve')}
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-red-500 border-red-500"
                            onClick={() => handleRejectReview(review.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            {t('reject')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}