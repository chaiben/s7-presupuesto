import { Fragment } from 'react';
import Checkbox from './Checkbox';
import Panel from './Panel';

export default function Form(props){
  return (
  <Fragment>
    <Checkbox 
    formData={props.formData} 
    addProduct={props.addProduct} 
    id="webPage" 
    label="Una página web (500 €)" />
    
    {props.formData["webPage"]  && <Panel formData={props.formData} addProduct={props.addProduct} />}

    <Checkbox 
    formData={props.formData} 
    addProduct={props.addProduct} 
    id="campaignSeo" 
    label="Una consultoria SEO (300 €)" />

    <Checkbox 
    formData={props.formData} 
    addProduct={props.addProduct} 
    id="campaignAds" 
    label="Una campaña de Google Ads (200 €)" />
  </Fragment>  
  );
}
