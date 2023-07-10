export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Pa'",
};

const passenger2: Passenger = {
    name: "Juan",
    children: ['Marla', 'Abby']
};

const printChildren = (passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;  
    
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}


printChildren(passenger2);