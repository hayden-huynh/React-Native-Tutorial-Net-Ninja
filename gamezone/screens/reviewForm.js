import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        onSubmit={(values, action) => {
          addReview(values);
          action.resetForm(); // Reset the form after submission
        }}
      >
        {(props) => (
          // props is provided automatically by Formik
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")} // Formik will update the value of the property specified
              value={props.values.title} // Set the updated value back into this text input
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              keyboardType="numeric"
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
            />
            {/* handleSubmit will trigger the onSubmit event of Formik */}
            <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
