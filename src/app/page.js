'use client'
import React from 'react';

import Clipboard from 'react-clipboard.js';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange9 = this.handleChange9.bind(this);
        this.getTextUpgr = this.getTextUpgr.bind(this);
        this.state = {            
            ncliente: '',
            ccliente: '',
            volume: '',
            vnota: '',
            nnota: '',
            epagador: '',
            npagador: '',
            cnpjp: '',
            dpagador: '',
            ndestino: '',
            cnpjd: '',
            dendereco: '',
            remessa: '',
            cubagem: '',
            transportadora: '',
        };
    }

    getTextUpgr() {
        return `
${this.state.remessa}
${this.state.ccliente} - ${this.state.ncliente}
Volumes: ${this.state.volume} - ${this.state.cubagem}
Objetos: 
${this.state.objeto}

Transportadora: ${this.state.transportadora}

VALOR NF: R$${this.state.vnota} NOTA= ${this.state.nnota}

OBS LOCAL DE COLETA E PAGADOR: ${this.state.npagador} - ${this.state.cnpjp}, Endereço: ${this.state.epagador}

CPNJ DESTINO: ${this.state.cnpjd} - ${this.state.ndestino}, Endereço: ${this.state.dendereco}
`;
    }
   
    handleChange9() {
        this.setState({ ncliente: '' });
        this.setState({ ccliente: '' });
        this.setState({ volume: '' });
        this.setState({ objeto: '' });
        this.setState({ vnota: '' });
        this.setState({ nnota: '' });
        this.setState({ epagador: '' });
        this.setState({ npagador: '' });
        this.setState({ cnpjp: '' });
        this.setState({ ndestino: '' });
        this.setState({ cnpjd: '' });
        this.setState({ dendereco: '' });
        this.setState({ remessa: '' })
        this.setState({ cubagem: '' })
        this.setState({ transportadora: '' })

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
                <select style={{ width: 175 }} onChange={(e) => this.setState({ remessa: e.target.value })}>
                   <option value="">--DEFINA A REMESSA--
                   </option>
                    <option value="Remessa Simples">Remessa simples</option>
                    <option value="Remessa em locação">Remessa em locação</option>               
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
                    <input type="number" style={{ width: 50 }} name="volume" value={this.state.volume} onChange={(e) => this.setState({ volume: e.target.value })} />
                </label>
                <br />                         
                <label>
                    <b>
                        Cubagem:
                    </b>                
                    <input type="text" style={{ width: 200 }} name="cubagem" value={this.state.cubagem} onChange={(e) => this.setState({ cubagem: e.target.value })} />
                </label>                       
                <br />
                <label> 
                <b>
                        Objetos:
                </b> 
                <br />                                   
                    <textarea type="text" style={{ width: 100, height:50 }} name="objeto" value={this.state.objeto} onChange={(e) => this.setState({ objeto: e.target.value })} />      
                </label> 
                <br />  
                <label> 
                <b>
                        Transportadora:
                </b> 
                <br />                                   
                    <textarea type="text" style={{ width: 100, height:50 }} name="transportadora" value={this.state.transportadora} onChange={(e) => this.setState({ transportadora: e.target.value })} />      
                </label> 
                <br />   
                <label> 
                <b>
                        Valor da nota:
                </b>                                            
                    <input type="number" style={{ width: 100 }} name="vnota" value={this.state.vnota} onChange={(e) => this.setState({ vnota: e.target.value })} />      
                </label> 
                <br />    
                <label> 
                <b>
                        Número da nota:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="nnota" value={this.state.nnota} onChange={(e) => this.setState({ nnota: e.target.value })} />      
                </label>  
                <br />               
                <label>
                <b>
                        Nome do pagador:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="npagador" value={this.state.npagador} onChange={(e) => this.setState({ npagador: e.target.value })} />      
                </label>
                <br /> 
                <label>
                <b>
                        CNPJ do pagador:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="cnpjp" value={this.state.cnpjp} onChange={(e) => this.setState({ cnpjp: e.target.value })} />      
                </label>               
                <br /> 
                <label>
                <b>
                        Endereço do pagador:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="epagador" value={this.state.epagador} onChange={(e) => this.setState({ epagador: e.target.value })} />      
                </label>  
                <br />  
                <br />               
                <label>
                <b>
                        Nome do destino:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="ndestino" value={this.state.ndestino} onChange={(e) => this.setState({ ndestino: e.target.value })} />      
                </label>
                <br /> 
                <label>
                <b>
                        CNPJ do destino:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="cnpjd" value={this.state.cnpjd} onChange={(e) => this.setState({ cnpjd: e.target.value })} />      
                </label>               
                <br /> 
                <label>
                <b>
                        Endereço do destino:
                </b>                                  
                    <input type="text" style={{ width: 100 }} name="dendereco" value={this.state.dendereco} onChange={(e) => this.setState({ dendereco: e.target.value })} />      
                </label>                                 
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
