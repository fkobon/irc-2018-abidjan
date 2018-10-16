import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class DayOne extends Component {
  render() {
    return (
      <Container>
          <List>
          <ListItem>
              <Body>
                <Text>Registration</Text>
                <Text note numberOfLines={1}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Opening Ceremony</Text>
                <Text note numberOfLines={2}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Cocoa/Coffee/tea break</Text>
                <Text note numberOfLines={3}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Keynote Speeches</Text>
                <Text note numberOfLines={4}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Discussions</Text>
                <Text note numberOfLines={5}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Lunch Break</Text>
                <Text note numberOfLines={6}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Session</Text>
                <Text note numberOfLines={7}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Cocoa/Coffee/tea break</Text>
                <Text note numberOfLines={8}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>Session Cont.</Text>
                <Text note numberOfLines={9}>8:30 - 9:30 / Hall A</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem>
              <Body>
                <Text>End of Day 1</Text>
                <Text note numberOfLines={10}>8:30 - 9:30 / Hall B</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Detail</Text>
                </Button>
              </Right>
            </ListItem>                                                                        
          </List>
      </Container>
    );
  }
}