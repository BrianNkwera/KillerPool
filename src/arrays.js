import oneBall from "./images/one.png";
import twoBall from "./images/two.png";
import sevenBall from "./images/seven.png";
import eightBall from "./images/eight.png";
import nineBall from "./images/nine.png";
import tenBall from "./images/ten.png";
import elevenBall from "./images/eleven.png";
import twelveBall from "./images/twelve.png";
import thirteenBall from "./images/thirteen.png";
import fourteenBall from "./images/fourteen.png";
import fifteenBall from "./images/fifteen.png";

const balls = [
  {points: 7, name: sevenBall},
  {points: 8, name: eightBall},
  {points: 9, name: nineBall},
  {points: 10, name: tenBall},
  {points: 11, name: elevenBall},
  {points: 12, name: twelveBall},
  {points: 13, name: thirteenBall},
  {points: 14, name: fourteenBall},
  {points: 15, name: fifteenBall},
  {points: 16, name: oneBall},
  {points: 17, name: twoBall},
];
const players = [
  {  name: "Brian", score: 0, inPlay: false },
  {  name: "Simon", score: 0, inPlay: false},
  { name: "Nkwera", score: 0, inPlay: false},
];

export { balls, players };
