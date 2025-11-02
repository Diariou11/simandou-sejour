import { useState } from 'react';
import { Header } from '@/components/Header';
import { ClientBottomNav } from '@/components/ClientBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockAccommodations } from '@/data/mockData';
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gradientBg1 from '@/assets/gradient-bg-1.jpg';

export default function ClientCompare() {
  const navigate = useNavigate();
  const [selected1, setSelected1] = useState(mockAccommodations[0].id);
  const [selected2, setSelected2] = useState(mockAccommodations[1].id);
  const [selected3, setSelected3] = useState(mockAccommodations[2].id);

  const accommodation1 = mockAccommodations.find(a => a.id === selected1);
  const accommodation2 = mockAccommodations.find(a => a.id === selected2);
  const accommodation3 = mockAccommodations.find(a => a.id === selected3);

  const allAmenities = Array.from(new Set([
    ...(accommodation1?.amenities || []),
    ...(accommodation2?.amenities || []),
    ...(accommodation3?.amenities || [])
  ]));

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src={gradientBg1} alt="" className="w-full h-full object-cover opacity-20 fixed" />
        </div>
        
        <div className="relative z-10 pt-20 px-4">
          <div className="container mx-auto max-w-7xl py-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="mb-4 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>

            <h1 className="text-2xl md:text-3xl font-black text-foreground mb-2">
              Comparateur d'hébergements
            </h1>
            <p className="text-muted-foreground mb-6">
              Comparez jusqu'à 3 hébergements côte à côte
            </p>

            {/* Selection dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card className="p-4">
                <Select value={selected1} onValueChange={setSelected1}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockAccommodations.map(acc => (
                      <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Card>

              <Card className="p-4">
                <Select value={selected2} onValueChange={setSelected2}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockAccommodations.map(acc => (
                      <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Card>

              <Card className="p-4">
                <Select value={selected3} onValueChange={setSelected3}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {mockAccommodations.map(acc => (
                      <SelectItem key={acc.id} value={acc.id}>{acc.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Card>
            </div>

            {/* Comparison Table */}
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-4 text-left font-bold text-foreground">Critère</th>
                      <th className="p-4 text-center font-bold text-foreground">{accommodation1?.name}</th>
                      <th className="p-4 text-center font-bold text-foreground">{accommodation2?.name}</th>
                      <th className="p-4 text-center font-bold text-foreground">{accommodation3?.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Image</td>
                      <td className="p-4">
                        <img src={accommodation1?.image} alt="" className="w-full h-32 object-cover rounded-lg" />
                      </td>
                      <td className="p-4">
                        <img src={accommodation2?.image} alt="" className="w-full h-32 object-cover rounded-lg" />
                      </td>
                      <td className="p-4">
                        <img src={accommodation3?.image} alt="" className="w-full h-32 object-cover rounded-lg" />
                      </td>
                    </tr>

                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-semibold">Type</td>
                      <td className="p-4 text-center">
                        <Badge variant="secondary">{accommodation1?.type}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="secondary">{accommodation2?.type}</Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="secondary">{accommodation3?.type}</Badge>
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4 font-semibold">Ville</td>
                      <td className="p-4 text-center text-foreground">{accommodation1?.city}</td>
                      <td className="p-4 text-center text-foreground">{accommodation2?.city}</td>
                      <td className="p-4 text-center text-foreground">{accommodation3?.city}</td>
                    </tr>

                    <tr className="border-b bg-muted/30">
                      <td className="p-4 font-semibold">Prix par nuit</td>
                      <td className="p-4 text-center font-bold text-primary">
                        {accommodation1?.price.toLocaleString()} GNF
                      </td>
                      <td className="p-4 text-center font-bold text-primary">
                        {accommodation2?.price.toLocaleString()} GNF
                      </td>
                      <td className="p-4 text-center font-bold text-primary">
                        {accommodation3?.price.toLocaleString()} GNF
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4 font-semibold">Note</td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          ⭐ {accommodation1?.rating} ({accommodation1?.reviews} avis)
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          ⭐ {accommodation2?.rating} ({accommodation2?.reviews} avis)
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          ⭐ {accommodation3?.rating} ({accommodation3?.reviews} avis)
                        </div>
                      </td>
                    </tr>

                    {allAmenities.map((amenity, idx) => (
                      <tr key={amenity} className={idx % 2 === 0 ? 'bg-muted/30 border-b' : 'border-b'}>
                        <td className="p-4 font-semibold">{amenity}</td>
                        <td className="p-4 text-center">
                          {accommodation1?.amenities.includes(amenity) ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {accommodation2?.amenities.includes(amenity) ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {accommodation3?.amenities.includes(amenity) ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}

                    <tr>
                      <td className="p-4 font-semibold">Action</td>
                      <td className="p-4 text-center">
                        <Button 
                          onClick={() => navigate(`/accommodation/${accommodation1?.id}`)}
                          className="w-full"
                        >
                          Voir détails
                        </Button>
                      </td>
                      <td className="p-4 text-center">
                        <Button 
                          onClick={() => navigate(`/accommodation/${accommodation2?.id}`)}
                          className="w-full"
                        >
                          Voir détails
                        </Button>
                      </td>
                      <td className="p-4 text-center">
                        <Button 
                          onClick={() => navigate(`/accommodation/${accommodation3?.id}`)}
                          className="w-full"
                        >
                          Voir détails
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <ClientBottomNav />
    </div>
  );
}