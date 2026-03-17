import { Character } from "./models/character.class.js";
import { MovableObject } from "./models/moveable-object.class.js";
import { World } from "./models/world.class.js";

let canvas;
let world;

function init() {
    canvas = document.getElementById('canvas');
}