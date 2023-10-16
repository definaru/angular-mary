
import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'raiting',
})

// implements PipeTransform
export class RaitingPipe {
    transform(value: number, args?: any): any {
        const result = `
        <div class="bg-black text-white">
            ${Math.floor(value)}
        </div>
        `
        // if (value <= 0) return 0;

        // let result = 1;
        // for (let i = 1; i <= value; i++) {
        //     result = result * i;
        // }
        return result;
    }
}