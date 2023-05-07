import { User } from "./user";

export class Reservation {
    idReservation?: number;
    dateReservation: Date;
    userReservation: User;
    event: Event[];
    codeReservation?: number;
    idEvent:number;
    idUser:number;
}
