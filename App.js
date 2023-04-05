import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* this where the tasks go */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>

      </View>

      {/*Write a task */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? " padding" : "height"}
        style={styles.writeTaskWrapper}  
      >
        <TextInput style={styles.input} placeholder={"Write a task"} />
      </KeyboardAvoidingView>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30,
    },
});
