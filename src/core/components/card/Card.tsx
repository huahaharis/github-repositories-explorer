import React from 'react';
import { Card } from 'antd'

type CardProps = {
  data?: any[];
};

const CardRepo: React.FC<CardProps> = ({data}) => {
    return <>
        {data?.map((res, index) => {
            return (
                <Card
                    key={index}
                    style={{ marginTop: 16 }}
                    title={`${res.name}`}
                    extra={<a href={`${res.html_url}`}>Visit Repo</a>}
                >
                    {res.description}
                </Card>
            );
        })}
    </>;
};

export default CardRepo;
