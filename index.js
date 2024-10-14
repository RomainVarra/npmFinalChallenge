import dotenv from 'dotenv';
import cowsay from 'cowsay';

dotenv.config();
const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(cowsay.say({
    text : "I'm a challenge",
    e : "oO",
    T : "U "
}));