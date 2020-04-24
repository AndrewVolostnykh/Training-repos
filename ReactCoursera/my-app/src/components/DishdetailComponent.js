import React from 'react';
import { Card , CardImg , CardText , CardBody , CardTitle } from 'reactstrap';

    function RenderDish({dish})
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
    
    function RenderComments({comments}){
        const tempComs = comments.map((comment) =>{
                return( 
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author}</p>
                        <p class="text-secondary">
                            {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p> 
                    </li>
                );
            });
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

    const Dishdetail = (props) => { 
        if(props.selectedDish == null){
            return (<div></div>);
        } else {
            return (
            <div className="container">
				<div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {
                            <RenderDish dish={props.selectedDish} />
                        }
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {
                            <RenderComments comments={props.selectedDish.comments} />
                        }
                    </div>
				</div>
			</div>
            );
        }
    }


export default Dishdetail;