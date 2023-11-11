import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  // Cria um BehaviorSubject para rastrear o estado do carrinho
  private carrinhoAtivoSubject = new BehaviorSubject<boolean>(true);

  // Declara uma propriedade carrinhoAtivo do tipo Observable que os componentes podem assinar
  carrinhoAtivo: Observable<boolean> = this.carrinhoAtivoSubject.asObservable();

  constructor() { }

  /**
   * Método para obter o estado atual do carrinho e alternar seu valor.
   * @returns Um Observable que emite o estado atual do carrinho.
   */
  getEstadoCarrinho(): Observable<boolean> {
    // Alterna o valor do BehaviorSubject
    if (this.carrinhoAtivoSubject.value) {
      this.carrinhoAtivoSubject.next(false);
    } else {
      this.carrinhoAtivoSubject.next(true);
    }

    // Retorna o Observable associado ao BehaviorSubject
    return this.carrinhoAtivoSubject.asObservable();
  }
}
