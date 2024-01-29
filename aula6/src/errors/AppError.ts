import { StatusCodes } from 'http-status-codes';

export class AppError {
  private _mensagem: string;
  private _status: number;

  constructor(mensagem: string, status: number = StatusCodes.BAD_REQUEST) {
    this._mensagem = mensagem;
    this._status = status;
  }

  get mensagem() {
    return this._mensagem;
  }

  get status() {
    return this._status;
  }
}