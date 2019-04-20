import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';
import connect from "@vkontakte/vkui-connect/index";

class Panelname extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            somedata: 'sometext',
        };
    }

    componentDidMount() {
        //// как передать сюда this.state.fetchedUser из App.js?
    }

    render() {

        let {
            id, go, fetchedUser // переменные из App.js указанные в <Panelname id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
        } = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>Example</PanelHeader>
                {fetchedUser &&
                <Group title="User Data Fetched with VK Connect">
                    <ListItem
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </ListItem>
                </Group>}

                <Group title="Navigation Example">
                    <Div>
                        <Button size="xl" level="2" onClick={go} data-to="persik">
                            Show me the Persik, please + {this.state.somedata}
                        </Button>
                    </Div>
                </Group>
            </Panel>
        );
    }
}

export default Panelname;
