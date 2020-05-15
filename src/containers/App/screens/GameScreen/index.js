/* eslint-disable no-eval */
import React from 'react';
import {
  View,
  Text,
  Button,
  Thumbnail,
  ListItem,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';
import * as _ from 'lodash';
import moment from 'moment';

// import CountDownBar from 'containers/App/components/GameScreen/CountDownBar';
import CheckedIcon from 'assets/AppAsset/checked.png';
import WrongIcon from 'assets/AppAsset/wrong.png';

const OPERATIONS = ['+', '-', '*'];

const CREATE_WRONG_RESULT_METHODS = [
  {
    method: correctResult => {
      return eval(`${correctResult} + ${Math.round(Math.random() * 10)}`);
    },
  },
  {
    method: correctResult => {
      return Math.round(
        eval(`${correctResult} / 10+ ${Math.round(Math.random() * 10)} * 10`),
      );
    },
  },
];

const MAX_ROUND = 10;

class GameScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: 3,
      timeLength: 3,
      currentGame: 1,
      operation: '+',
      arg1: 5,
      arg2: 2,
      correctResult: 7,
      result: 7,
      youAreRight: undefined,
      records: [],
      gameEnd: false,
    };
    this.countDownTimer;
  }

  componentDidMount() {
    this.setTimerDown();
  }

  componentWillUnmount() {}

  setTimerDown() {
    this.countDownTimer = setInterval(() => {
      if (this.state.currentGame > MAX_ROUND) {
        clearInterval(this.countDownTimer);
      } else {
        if (this.state.time > 0) {
          this.setState({time: this.state.time - 1});
        } else {
          this.createQuestion(this.state.youAreRight);
        }
      }
    }, 1000);
  }

  handleChooseResult(chosenResult) {
    const {correctResult, result, youAreRight} = this.state;
    if (youAreRight !== undefined) {
      return;
    }
    if (chosenResult === true) {
      if (correctResult === result) {
        this.setState({
          youAreRight: true,
        });
      } else {
        this.setState({
          youAreRight: false,
        });
      }
    }
    if (chosenResult === false) {
      if (correctResult !== result) {
        this.setState({
          youAreRight: true,
        });
      } else {
        this.setState({
          youAreRight: false,
        });
      }
    }
  }

  createQuestion(isUserScored) {
    const isResultCorrect = Math.round(Math.random());
    const newArg1 =
      Math.round(Math.random() * 10) * Math.round(Math.random() * 10);
    const newArg2 =
      Math.round(Math.random() * 10) * Math.round(Math.random() * 10);
    const newOperation = _.sample(OPERATIONS);
    const newMathExpress = `${newArg1} ${newOperation} ${newArg2} `;
    const {arg1, arg2, operation, result, youAreRight} = this.state;
    const currentMathExpress = `${arg1} ${operation} ${arg2} = ${result}`;

    let newRecords = [
      ...this.state.records,
      {
        question: currentMathExpress,
        userResult: youAreRight,
      },
    ];
    if (this.state.currentGame < MAX_ROUND) {
      this.setState({
        timeLength: this.state.timeLength,
        time: this.state.timeLength,
        currentGame: this.state.currentGame + 1,
        arg1: newArg1,
        arg2: newArg2,
        youAreRight: undefined,
        operation: newOperation,
        correctResult: eval(newMathExpress),
        result: isResultCorrect
          ? eval(newMathExpress)
          : _.sample(CREATE_WRONG_RESULT_METHODS).method(eval(newMathExpress)),
        records: newRecords,
      });
    } else {
      this.setState({
        currentGame: this.state.currentGame + 1,
        records: newRecords,
        gameEnd: true,
      });
    }
  }

  render() {
    let {
      time,
      timeLength,
      currentGame,
      arg1,
      arg2,
      operation,
      result,
      youAreRight,
      records,
      gameEnd,
    } = this.state;
    const mathExpress = `${arg1} ${operation} ${arg2} `;
    return (
      <View style={styles.wrapper}>
        {!gameEnd && (
          <View>
            <View style={styles.title}>
              <Text style={styles.titleText}>Round {currentGame}</Text>
              <Text style={styles.clock}>
                {moment.utc(time * 1000).format('mm:ss')}
              </Text>
            </View>
            <View style={styles.CountDownBarWrapper}>
              {/* <CountDownBar percent={Math.round((time / timeLength) * 100)} /> */}
            </View>
            <View style={styles.gameBody}>
              <View style={styles.gameQuestion}>
                <Text
                  style={
                    styles.gameQuestionText
                  }>{`${mathExpress} = ${result}`}</Text>
                {youAreRight === true && (
                  <Thumbnail
                    style={styles.thumbnail}
                    small
                    source={CheckedIcon}
                  />
                )}
                {youAreRight === false && (
                  <Thumbnail
                    style={styles.thumbnail}
                    small
                    source={WrongIcon}
                  />
                )}
              </View>
              <View style={styles.gameDesicion}>
                <Button
                  style={styles.yesBtn}
                  onPress={() => {
                    this.handleChooseResult(true);
                  }}>
                  <Text style={styles.btnText}>Yes</Text>
                </Button>
                <Button
                  style={styles.noBtn}
                  onPress={() => {
                    this.handleChooseResult(false);
                  }}>
                  <Text style={styles.btnText}>No</Text>
                </Button>
              </View>
            </View>
          </View>
        )}
        <ScrollView style={styles.resultsWrapper}>
          {records.map((recordItem, idx) => (
            <ListItem icon key={recordItem.question}>
              <Left>
                <Button style={{backgroundColor: '#FF9501'}}>
                  <Icon active name="baseball" />
                </Button>
              </Left>
              <Body style={styles.recordBody}>
                <View style={styles.recordBodyTitle}>
                  <Text style={styles.recordBodyTitleText}>
                    Round {idx + 1}
                  </Text>
                </View>
                <Text>{recordItem.question}</Text>
              </Body>
              <Right>
                {recordItem.userResult ? (
                  <Thumbnail
                    style={styles.thumbnail}
                    small
                    source={CheckedIcon}
                  />
                ) : (
                  <Thumbnail
                    style={styles.thumbnail}
                    small
                    source={WrongIcon}
                  />
                )}
              </Right>
            </ListItem>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  titleText: {
    color: 'green',
  },
  clock: {
    position: 'absolute',
    right: 30,
  },
  CountDownBarWrapper: {
    alignItems: 'center',
  },
  gameBody: {},
  gameQuestion: {
    flexDirection: 'row',
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameQuestionText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
    fontFamily: 'System',
  },
  gameDesicion: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  yesBtn: {
    backgroundColor: '#badc58',
    justifyContent: 'center',
    height: 100,
    width: 130,
  },
  noBtn: {
    backgroundColor: '#eb4d4b',
    justifyContent: 'center',
    height: 100,
    width: 130,
  },
  btnText: {
    fontSize: 30,
  },
  thumbnail: {},
  resultsWrapper: {
    paddingTop: 10,
  },
  recordText: {
    color: 'white',
  },
  recordBody: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  recordBodyTitle: {
    backgroundColor: '#f1c40f',
    borderRadius: 10,
    padding: 5,
    marginRight: 10,
  },
  recordBodyTitleText: {
    color: 'white',
  },
});

export default GameScreen;
