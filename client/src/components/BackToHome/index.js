import React from 'react'
import {Col, Row, Container} from '../Grid';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

export default function BackToHome() {
  return (
		<div className='row mb-5'>
      
      <Animated
        animationIn='fadeIn'
        
				className='col-11 align-items-center'
			>
				<hr className='bg-dark pt-1 my-1' />
        </Animated>
      <div className='col-1'>
			<Animated
				animationIn='rotateIn'
				className='col-11 align-items-center'
			>
				<Link to='/' className='my-0'>
					<h4 className='fa-pull-right mx-4 fas fa-times my-0'>
						{' '}
					</h4>
				</Link>
			</Animated>
        
      </div>
		</div>
	);
}
