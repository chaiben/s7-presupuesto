import { Fragment } from 'react';
import Checkbox from './Checkbox';
import Panel from './Panel';

export default function Form(props){
  return (
  <Fragment>
    <Checkbox formData={props.formData} addProduct={props.addProduct} id="paginaWeb" label="Una pàgina web (500 €)" />
    {props.formData["paginaWeb"]  && <Panel formData={props.formData} addProduct={props.addProduct} />}
    <Checkbox formData={props.formData} addProduct={props.addProduct} id="campaniaSeo" label="Una consultoria SEO (300 €)" />
    <Checkbox formData={props.formData} addProduct={props.addProduct} id="campaniaAds" label="Una campanya de Google Ads (200 €)" />
  </Fragment>  
  );
}
