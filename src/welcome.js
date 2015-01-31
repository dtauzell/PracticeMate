import {App} from './app';


export class Welcome{ 
	
	static inject() { return [App]; } 
	constructor(app){ 
		this.router = app.router; 
		this.routines = ['warmup', 'argeggios']; 
	}
  
  	showRoutine() {
	  this.router.navigate('routine/');
  	}
}