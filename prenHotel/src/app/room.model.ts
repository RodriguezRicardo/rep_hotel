import { Booking } from './booking.model';


export class Room
{
  constructor(
    public booking : Booking,
    public from: Date,
    public to : Date,
    public name : String,
    public surname : String,
  ) {}

}
