import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number from 1 to 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={ReviewSchema}
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        onSubmit={(values, action) => {
          addReview(values);
          // action.resetForm(); // Reset the form after submission
        }}
      >
        {/* When there are any validation errors, yup will pass them to formik and we can access them via "props" */}
        {(props) => (
          // props is provided automatically by Formik
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")} // Formik will update the value of the property specified
              value={props.values.title} // Set the updated value back into this text input
              onBlur={props.handleBlur("title")} // Do validation as soon as the input field loses focus
            />
            <Text style={globalStyles.errorText}>
              {/* props.touched.<attr> is true if the the input field of that attr has been touched by the user, and false otherwise*/}
              {/* Only show the error if the user has attempting to edit the input field by touching on it */}
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              keyboardType="numeric"
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            {/* handleSubmit will trigger the onSubmit event of Formik */}
            <FlatButton text="Submit" onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  );
}
