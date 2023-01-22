export interface Reserva {
  title: string;
  price: string;
  imageUrl: string;
  id: string;
}

export interface ReservasState {
  reservas: Reserva[];
}
