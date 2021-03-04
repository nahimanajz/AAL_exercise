import React from 'react';

export default function Items({items}) {

return ( 
  		<div>
              <p className="items">Items </p>                
                 <ol className="item-list">   					
                   {items.map(item =>  <li key={item}>{item}</li>)} 					
                </ol>
			 
		</div>

)
}
