class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }

    getTotalAmount() {
        return this.price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Ticket price: Rs.", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket = new OnlineTicket("3 Idiots", "A12", 200, 25);

ticket.printTicket();
console.log("Convenience fee: Rs.", ticket.convenienceFee);
console.log("Total amount: Rs.", ticket.getTotalAmount());
