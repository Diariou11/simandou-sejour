import { useState } from 'react';
import { Header } from '@/components/Header';
import { HostBottomNav } from '@/components/HostBottomNav';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export default function HostCalendar() {
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState('hotel-belle-vue');
  const [currentMonth, setCurrentMonth] = useState(7); // août = 7 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);

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
          <Card className="p-4 md:p-6 mb-6 overflow-x-auto">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(prev => prev - 1);
                  } else {
                    setCurrentMonth(prev => prev - 1);
                  }
                }}
                className="p-2 hover:bg-accent rounded-md transition-smooth"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <h3 className="text-lg md:text-2xl font-black text-foreground">
                {['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'][currentMonth]} {currentYear}
              </h3>
              <button 
                onClick={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(prev => prev + 1);
                  } else {
                    setCurrentMonth(prev => prev + 1);
                  }
                }}
                className="p-2 hover:bg-accent rounded-md transition-smooth"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
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
              {generateCalendarDays().map((day) => {
                const isSelected = selectedDates.includes(day);
                return (
                  <button
                    key={day}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedDates(prev => prev.filter(d => d !== day));
                      } else {
                        setSelectedDates(prev => [...prev, day]);
                      }
                    }}
                    className={`p-2 md:p-3 rounded-lg text-center transition-smooth ${
                      isSelected
                        ? 'border-2 border-primary bg-primary/10'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <div className="text-sm md:text-lg font-bold text-foreground">{day}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {isSelected ? 'Occupé' : 'Libre'}
                    </div>
                  </button>
                );
              })}
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
      
      <HostBottomNav />
    </div>
  );
}
