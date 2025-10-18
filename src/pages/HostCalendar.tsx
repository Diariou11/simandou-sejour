import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function HostCalendar() {
  const [selectedDate, setSelectedDate] = useState(26);
  const [selectedAccommodation, setSelectedAccommodation] = useState('hotel-belle-vue');

  const accommodations = [
    { id: 'hotel-belle-vue', name: 'Hôtel Belle Vue', location: 'Conakry, Guinée' },
    { id: 'hotel-fouta', name: 'Hôtel Fouta Djallon', location: 'Labé, Guinée' },
  ];

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="min-h-screen pb-16 bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-2xl font-black text-foreground mb-8">
            Gestion du Calendrier
          </h1>

          {/* Accommodation Selector */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-foreground mb-3">
              Sélectionnez un hébergement
            </h2>
            <Select value={selectedAccommodation} onValueChange={setSelectedAccommodation}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {accommodations.map((acc) => (
                  <SelectItem key={acc.id} value={acc.id}>
                    <div className="flex flex-col">
                      <span className="font-bold">{acc.name}</span>
                      <span className="text-sm text-muted-foreground">{acc.location}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Calendar */}
          <Card className="p-6 mb-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button className="p-2 hover:bg-accent rounded-md">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-black text-foreground">août 2025</h3>
              <button className="p-2 hover:bg-accent rounded-md">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Days of Week */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {generateCalendarDays().map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`p-3 rounded-lg text-center transition-smooth ${
                    selectedDate === day
                      ? 'border-2 border-primary bg-primary/5'
                      : 'hover:bg-accent'
                  }`}
                >
                  <div className="text-lg font-bold text-foreground">{day}</div>
                  <div className="text-xs text-muted-foreground mt-1">Libre</div>
                </button>
              ))}
            </div>
          </Card>

          {/* AI Suggestion */}
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg mb-6">
            <p className="text-sm text-foreground">
              <span className="font-bold">💡 IA :</span> Le mois de décembre est très demandé à Conakry. 
              Pensez à augmenter vos prix de 15 % entre le 20 et le 31.
            </p>
          </div>

          {/* Save Button */}
          <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-bold">
            Sauvegarder les changements
          </Button>
        </div>
      </div>
    </div>
  );
}
