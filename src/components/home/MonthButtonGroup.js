import React from "react";
import './MonthButtonGroup.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MediaQuery from 'react-responsive'

function MonthButtonGroup({month, onMonthChange}) {

  return (
  <div>
    <MediaQuery maxWidth={767}>
      <ButtonGroup className="mb-2 month-buttons">
        <Button className={ month === 'JAN' ? "active" : "" } onClick={ () => onMonthChange('JAN') }>Jan</Button>
        <Button className={ month === 'FEB' ? "active" : "" } onClick={ () => onMonthChange('FEB') }>Feb</Button>
        <Button className={ month === 'MAR' ? "active" : "" } onClick={ () => onMonthChange('MAR') }>Mar</Button>
        <Button className={ month === 'APR' ? "active" : "" } onClick={ () => onMonthChange('APR') }>Apr</Button>
        <Button className={ month === 'MAY' ? "active" : "" } onClick={ () => onMonthChange('MAY') }>May</Button>
        <Button className={ month === 'JUN' ? "active" : "" } onClick={ () => onMonthChange('JUN') }>Jun</Button>
      </ButtonGroup>
      <span />
      <ButtonGroup className="mb-2">
        <Button className={ month === 'JUL' ? "active" : "" } onClick={ () => onMonthChange('JUL') }>Jul</Button>
        <Button className={ month === 'AUG' ? "active" : "" } onClick={ () => onMonthChange('AUG') }>Aug</Button>
        <Button className={ month === 'SEP' ? "active" : "" } onClick={ () => onMonthChange('SEP') }>Sep</Button>
        <Button className={ month === 'OCT' ? "active" : "" } onClick={ () => onMonthChange('OCT') }>Oct</Button>
        <Button className={ month === 'NOV' ? "active" : "" } onClick={ () => onMonthChange('NOV') }>Nov</Button>
        <Button className={ month === 'DEC' ? "active" : "" } onClick={ () => onMonthChange('DEC') }>Dec</Button>
      </ButtonGroup>
    </MediaQuery>
    <MediaQuery minWidth={768}>
      <ButtonGroup className="mb-2 month-buttons">
        <Button className={ month === 'JAN' ? "active" : "" } onClick={ () => onMonthChange('JAN') }>Jan</Button>
        <Button className={ month === 'FEB' ? "active" : "" } onClick={ () => onMonthChange('FEB') }>Feb</Button>
        <Button className={ month === 'MAR' ? "active" : "" } onClick={ () => onMonthChange('MAR') }>Mar</Button>
        <Button className={ month === 'APR' ? "active" : "" } onClick={ () => onMonthChange('APR') }>Apr</Button>
        <Button className={ month === 'MAY' ? "active" : "" } onClick={ () => onMonthChange('MAY') }>May</Button>
        <Button className={ month === 'JUN' ? "active" : "" } onClick={ () => onMonthChange('JUN') }>Jun</Button>
        <Button className={ month === 'JUL' ? "active" : "" } onClick={ () => onMonthChange('JUL') }>Jul</Button>
        <Button className={ month === 'AUG' ? "active" : "" } onClick={ () => onMonthChange('AUG') }>Aug</Button>
        <Button className={ month === 'SEP' ? "active" : "" } onClick={ () => onMonthChange('SEP') }>Sep</Button>
        <Button className={ month === 'OCT' ? "active" : "" } onClick={ () => onMonthChange('OCT') }>Oct</Button>
        <Button className={ month === 'NOV' ? "active" : "" } onClick={ () => onMonthChange('NOV') }>Nov</Button>
        <Button className={ month === 'DEC' ? "active" : "" } onClick={ () => onMonthChange('DEC') }>Dec</Button>
      </ButtonGroup>
    </MediaQuery>
    </div>
  );
}

export default MonthButtonGroup;