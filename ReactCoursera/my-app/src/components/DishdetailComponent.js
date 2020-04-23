import React , { Component } from 'react';
import { Card ,
    CardImg , CardImgOverlay ,
     CardText , CardBody ,
      CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);


    }

    renderDish(dish)
	{
		if(dish != null){
			return(
                <div className="container">
                    <div className="row">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                 </div>
			);
		} else {
			return (<div></div>);
		}
    }
    
    renderComments(){
        if(this.props.selectedDish.comments == null) {
            return;
        } else {
            const tempComs = this.props.selectedDish.comments.map((comment) =>{
                    return( 
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>{comment.author}</p>
                            <p class="text-secondary">
                                {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p> 
                        </li>
                    ); // i actualy dont know how this date parses, but this works
                })
            if(tempComs != null){
                return (
                    <div className="container">
                        <div className="row">
                            <header>
                                <h4>Comments</h4>
                            </header>
                            
                            <ul className="list-unstyled">
                                {tempComs}
                            </ul>
                        </div>
                    </div>
                    );
            } else {
                return(<div></div>);
            }
        }
    }

    render() { 
        if(this.props.selectedDish == null){
            return (<div></div>);
        } else {
            return (
            <div className="container">
				<div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {
                            this.renderDish(this.props.selectedDish)
                        }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {
                            this.renderComments(this.props.selectedDish) 
                        }
                    </div>
				</div>
			</div>
            );
        }
    }
} 

export default Dishdetail;