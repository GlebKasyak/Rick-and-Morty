import * as React from 'react';
import { Col, Card, Icon, Button } from "antd";

import { ICardComponent } from "../utils/Interfsces";

const CardComponent = (props: ICardComponent): JSX.Element => {
    const { episode, toggleFavorite, isFavorite } = props;
    return (
        <Col span={ 6 } className="p15" >
            <Card
                className="card"
                hoverable
                cover={ <img alt={`Rick end Morty ${ episode.name }`} src={ episode.image.medium } /> }
                actions={[
                    <a target="_blank" href={ episode.url }><Icon type="eye" key="link"/></a>,
                    <a target="_blank" href={ episode._links.self.href }><Icon type="info" key="info"/></a>,
                    <Button
                        className={ isFavorite ? "favorite" : "" }
                        onClick={ toggleFavorite.bind(null, episode) }
                        icon="heart"
                    />
                ]}
            >
                <Card.Meta
                    title={ episode.name }
                    description={ `Season: ${ episode.season }  Number: ${ episode.number }` }
                />
            </Card>
        </Col>
    );
};

export default CardComponent;