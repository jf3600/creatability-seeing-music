/**
 * Copyright 2019 Google LLC
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 3 as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

import { ftom } from './Midi'

//returns a log scaled frequency
export function scaleFreq(freq){
	return scaleMidi(ftom(freq))
}

const lowestNote = 12
const highestNote = 118

//scale the midi around middle c
export function scaleMidi(midi){
	return Math.scale(midi, lowestNote, highestNote, 0, 1)
}

export function freqInRange(freq){
	const mid = ftom(freq)
	return lowestNote <= mid && mid <= highestNote
}

export function fontStyle(context){
	const height = window.innerHeight
	const fontSize = Math.clamp(height/40, 10, 16)
	context.font = `${fontSize}px sans-serif`
}

// export const lowestPosition = scaleMidi(lowestNote)
// export const highestPosition = scaleMidi(highestNote)
