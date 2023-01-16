/**
* @fileOverview JavaScript Initialisation Library.
* @author <a href="https://github.com/richardhenyash">Richard Ash</a>
* @version 1.1.1
*/
/*jshint esversion: 6 */

// Buffer balloon sprite images //
const imgBalloonBlue = new Image();
imgBalloonBlue.src = "images/balloon-purple-cropped.png";
const imgBalloonOrange = new Image();
imgBalloonOrange.src = "images/balloon-purple-cropped.png";
const imgBalloonPurple = new Image();
imgBalloonPurple.src ="images/balloon-purple-cropped.png ";
const imgBalloonRed = new Image();
imgBalloonRed.src = "images/balloon-purple-cropped.png";
const imgBalloonGreen = new Image();
imgBalloonGreen.src = "images/balloon-purple-cropped.png";
const imgBalloonYellow = new Image();
imgBalloonYellow.src = "images/balloon-purple-cropped.png";

// Buffer sound effects, set volume to 0.6 //
const soundPop = new Audio("assets/sounds/pop.mp3");
soundPop.volume = 0.5;
const soundDeflate = new Audio("assets/sounds/deflate.mp3");
soundDeflate.volume = 0.5;
const soundHighScore = new Audio("assets/sounds/high-score.mp3");
soundHighScore.volume = 0.5;
const soundUnlucky = new Audio("assets/sounds/unlucky.mp3");
soundUnlucky.volume = 0.5;
const soundWellDone = new Audio("assets/sounds/well-done.mp3");
soundWellDone.volume = 0.5;

// Initialise global variables //
let bpmSoundEffectsMuted = false;
let bpmGameMode;
let bpmQno;
let bpmDifficulty;
let bpmActiveButtons;
let bpmOptionArray;
let bpmQArray;
let bpmHealthArray;
let bpmCQ;
let bpmQCurrent;
let bpmAnswerArray;
let bpmScoreArray;