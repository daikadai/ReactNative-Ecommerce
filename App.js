import React from 'react';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { label: 'Furniture', value:1},
  { label: 'Cloting', value:2},
  { label: 'Cameras', value:3}
]
export default function App() {
  return (
   <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
   </Screen>
  );
}

