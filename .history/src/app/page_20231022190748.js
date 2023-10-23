'use client'
import React from 'react';

import Clipboard from 'react-clipboard.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextUpgr = this.getTextUpgr.bind(this);
        this.state = {
            motivo: '',
            fast: '',
            horario: '',
            contato1: '',
            contato2: '',
            mcontato: '',
            ncliente: '',
            ccliente: '',
            volume: '',
        };
    }

    getTextUpgr() {
        return `Notas

Qual o nome do cliente?
R: ${this.state.ncliente}

Qual o código do cliente?
R: ${this.state.ccliente}

Quantidade de volume?
R: ${this.state.volume}

Objetivos?
R: ${this.state.objeto}

Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
R: ${this.state.horario}

Contato Principal: ${this.state.contato1}
Contato 2: ${this.state.contato2}
Meio de contato: ${this.state.mcontato}`;
    }
   
    handleChange9() {
        this.setState({ horario: '' });
        this.setState({ contato1: '' });
        this.setState({ contato2: '' });
        this.setState({ mcontato: '' });
        this.setState({ fast: '' });
        this.setState({ ncliente: '' });
        this.setState({ ccliente: '' });
        this.setState({ volume: '' });
        this.setState({ objeto: '' });
    }
    render() {
        return (
            <div style={{
                padding: '30px', 
                backgroundColor: '#282c34',
                borderColor: 'orange',
                borderStyle: 'solid',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white',
                margin: '15px'
            }}>
                <div style={{ textAlign: 'center' }}><label><b>NOTAS</b></label></div>
                <br />              
                <select name="nomeOpercao">
                    <option value="remessaSimples">Remessa simples</option>
                    <option value="remessaemLocacao">Remessa em locação</option>               
                </select>
                <br />
                <label>
                    <b>
                        Código do cliente:
                    </b>                   
                    <input type="text" style={{ width: 50 }} name="ccliente" value={this.state.ccliente} onChange={(e) => this.setState({ ccliente: e.target.value })} />
                </label> 
                <br />           
                <label>
                    <b>
                        Nome do Cliente:
                    </b>                
                    <input type="text" style={{ width: 400 }} name="ncliente" value={this.state.ncliente} onChange={(e) => this.setState({ ncliente: e.target.value })} />
                </label>                       
                <br />
                <label>
                    <b>
                        Quantidade de volume:
                    </b>
                    <input type="text" style={{ width: 400 }} name="volume" value={this.state.volume} onChange={(e) => this.setState({ volume: e.target.value })} />
                </label>
                <br /> 
                <label>
                    <b>
                        Objetos:
                    </b>                   
                    <textaa type="text" style={{ width: 100, height:100 }} name="objeto" value={this.state.objeto} onChange={(e) => this.setState({ objeto: e.target.value })} />
                </label> 
                <br />     
                <label>
                    <b>
                        Cliente possui roteador Fast?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='fast' name='fast' value='Sim'
                        checked={this.state.fast === 'Sim'} onChange={(e) => this.setState({ fast: e.target.value })} /> Sim</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='fast' name='fast' value='Não'
                        checked={this.state.fast === 'Não'} onChange={(e) => this.setState({ fast: e.target.value })} /> Não</div>
                <br />
                <label>
                    <b>
                        Qual melhor horário ou período para receber o retorno do time do COMERCIAL?
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='horario' name='horario' value='Manha'
                        checked={this.state.horario === 'Manha'} onChange={(e) => this.setState({ horario: e.target.value })} /> Manhã</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='horario' name='horario' value='Tarde'
                        checked={this.state.horario === 'Tarde'} onChange={(e) => this.setState({ horario: e.target.value })} /> Tarde</div>
                <div style={{ display: 'inline-block' }}>
                    <input type='radio' id='horario' name='horario' value='Ambos'
                        checked={this.state.horario === 'Ambos'} onChange={(e) => this.setState({ horario: e.target.value })} /> Ambos</div>
                <br />
                <label>
                    <b>
                        Contato Principal:
                    </b>
                    <br />
                    <input type="text" style={{ width: 400 }} name="contato1" value={this.state.contato1} onChange={(e) => this.setState({ contato1: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Contato 2:
                    </b>
                    <br />
                    <input type="text" style={{ width: 400 }} name="contato2" value={this.state.contato2} onChange={(e) => this.setState({ contato2: e.target.value })} />
                </label>
                <br />
                <label>
                    <b>
                        Meio de contato:
                    </b>
                </label>
                <br />
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='mcontato' name='mcontato' value='WHATSAPP'
                        checked={this.state.mcontato === 'WHATSAPP'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> WHATSAPP</div>
                <div style={{ display: 'inline-block', marginRight: '10px' }}>
                    <input type='radio' id='mcontato' name='mcontato' value='LIGAÇÃO'
                        checked={this.state.mcontato === 'LIGAÇÃO'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> LIGAÇÃO</div>
                <div style={{ display: 'inline-block' }}>
                    <input type='radio' id='mcontato' name='mcontato' value='AMBOS'
                        checked={this.state.mcontato === 'AMBOS'} onChange={(e) => this.setState({ mcontato: e.target.value })} /> AMBOS</div>
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Clipboard option-text={this.getTextUpgr}>
                        COPIAR
                    </Clipboard>
                    <button onClick={this.handleChange9}>LIMPAR TODOS CAMPOS</button>
                </div>
            </div>

        );
    }
}
