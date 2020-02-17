import * as React from 'react'
import { Spin, Alert } from 'antd';

export default () => (
    <Spin tip="Loading...">
        <Alert
            message="Please wait"
            description="Favorite episodes loading"
            type="info"
        />
    </Spin>
);