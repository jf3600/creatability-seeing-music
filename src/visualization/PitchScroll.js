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

import { PitchScrollTail } from './PitchScrollTail'
import { Visualization } from './Visualization'
import { Midi } from 'tone'
import { fontStyle } from '../data/Position'

export class PitchScroll extends Visualization {
	constructor(source){
		super('pitch scroll')

		this._pitchTail = new PitchScrollTail(source)
	}

	resize(width, height){
		super.resize(width, height)
		this._pitchTail.resize(width, height)
	}

	set midiOnly(m){
		this._pitchTail.midiOnly = m
	}

	get midiOnly(){
		return this._pitchTail.midiOnly
	}

	set fullColor(f){
		this._pitchTail.fullColor = f
	}

	get fullColor(){
		return this._pitchTail.fullColor
	}

	clear(){
		this._pitchTail.clear()
	}

	drawTo(context, x, y){
		this._pitchTail.drawTo(context, x, y)
		//draw a circle at the pitch scroll center

		if (this._pitchTail.thickness){
			context.beginPath()
			context.fillStyle = this._pitchTail.color
			context.arc(this.width/2, this._pitchTail.y, this._pitchTail.thickness/2, 0, Math.PI * 2)
			context.fill()
		}
	}

	drawText(context, x=(this.width * 0.6)){
		if (this._pitchTail.midi > 0){
			fontStyle(context)
			context.textBaseline = 'middle' 
			context.fillStyle = this._pitchTail.color
			context.fillText(Midi(this._pitchTail.midi).toNote(), x, this._pitchTail.y)
		}
	}
}
