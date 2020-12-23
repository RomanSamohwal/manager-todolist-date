import React from 'react';
import './ModalWindow.css'

/*export const Window = (props:any) => {
    let name = ['Name', 'Description', 'Date', 'Time from', 'Time to']
    const showHideClassName =   props.show ? "modal display-block" : "modal display-none";
    return <div className={showHideClassName}>
        <div className='container'>
            <div className='grid-container'>
                <div className='grid-name'>
                    {name.map((n, k) => {
                        return <span key={k + " " + Math.floor(Math.random() * 100)}>
                        {n}
                    </span>
                    })}
                </div>

                <div className='grid-input'>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <div className='input-time-container'>
                        <div className= 'time-box'>
                            <input type='number' max={60} min={0}/>
                            <input type='number' max={60} min={0}/>
                        </div>
                        <div className= 'time-box'>
                            <input type='number' max={60} min={0}/>
                            <input type='number' max={60} min={0}/>
                        </div>
                    </div>
                </div>
            </div>
          <div>
              <button>close</button>
          </div>
        </div>
    </div>
}*/

export const ModalWindow = (props: any) => {
    let names = ['Name', 'Description', 'Date', 'Time from', 'Time to']
    const showHideClassName =   props.show ? 'modal display-block' : 'modal display-none';
    return <div className={showHideClassName}>
        <div className='container'>
            <div className='container-right'>
                {names.map((n, k) => {
                    return <div key={k}>
                        {n}
                    </div>
                })}
            </div>
            <div className='container-left'>
                <input type="text"/>
                <input type="text"/>
                <div className='container-row'>
                    <input type='number' max={60} min={0}/>
                    <input type='number' max={60} min={0}/>
                </div>
                <div className='container-row'>
                    <input type='number' max={60} min={0}/>
                    <input type='number' max={60} min={0}/>
                </div>
            </div>
            {/*<div className='container-row'><span>message err</span>
            <button>add new event</button>
        </div>*/}
        </div>
    </div>
}

