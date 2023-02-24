export interface Reserva {
  title: string;
  price: string;
  imageUrl: string;
  tipo: string;
  description: string;
  id: string;
}

export interface ReservasState {
  reservas: Reserva[];
}
