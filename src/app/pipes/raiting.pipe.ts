
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
        return result;
    }
}