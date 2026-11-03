
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TEMPLATES = [
  { id: '1', name: 'Cinematic Typography', color: '#7C3AED' },
  { id: '2', name: 'Animated Headlines', color: '#0891B2' },
  { id: '3', name: 'Minimal Text Motion', color: '#DB2777' },
  { id: '4', name: 'Bold Storytelling', color: '#D97706' },
];

export default function App() {
  const [script, setScript] = useState('');
  const [selected, setSelected] = useState('1');
  const [duration, setDuration] = useState('30');
  const [fps, setFps] = useState('30');

  const generate = () => {
    if (!script.trim()) {
      Alert.alert('Script required', 'Pehle apni script likho.');
      return;
    }

    Alert.alert(
      'Project Ready',
      `Template: ${
        TEMPLATES.find(t => t.id === selected)?.name
      }\nDuration: ${duration} seconds\nFormat: 16:9\nFPS: ${fps}\n\nVideo rendering will be added in the next development step.`
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>TYPO AI STUDIO</Text>
        <Text style={styles.subtitle}>
          Script se animated typography video banao
        </Text>

        <View style={styles.panel}>
          <Text style={styles.heading}>01  YOUR SCRIPT</Text>
          <TextInput
            style={styles.input}
            placeholder="Yahan apni script paste karo..."
            placeholderTextColor="#77798A"
            multiline
            value={script}
            onChangeText={setScript}
            textAlignVertical="top"
          />
          <Text style={styles.note}>
            Apni script ke hisab se video tayyar karne ke liye.
          </Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.heading}>02  CHOOSE TEMPLATE</Text>

          {TEMPLATES.map(template => (
            <TouchableOpacity
              key={template.id}
              onPress={() => setSelected(template.id)}
              style={[
                styles.template,
                selected === template.id && {
                  borderColor: template.color,
                  backgroundColor: '#202033',
                },
              ]}
            >
              <View
                style={[
                  styles.dot,
                  { backgroundColor: template.color },
                ]}
              />
              <Text style={styles.templateText}>
                {template.name}
              </Text>
              <Text style={styles.check}>
                {selected === template.id ? '✓' : '○'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.panel}>
          <Text style={styles.heading}>03  VIDEO SETTINGS</Text>

          <Text style={styles.label}>Video duration</Text>
          <View style={styles.options}>
            {['15', '30', '60', '90'].map(value => (
              <TouchableOpacity
                key={value}
                onPress={() => setDuration(value)}
                style={[
                  styles.option,
                  duration === value && styles.activeOption,
                ]}
              >
                <Text style={styles.optionText}>
                  {value}s
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.label}>Frame rate</Text>
          <View style={styles.options}>
            {['24', '30', '60'].map(value => (
              <TouchableOpacity
                key={value}
                onPress={() => setFps(value)}
                style={[
                  styles.option,
                  fps === value && styles.activeOption,
                ]}
              >
                <Text style={styles.optionText}>
                  {value} FPS
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.format}>
            <Text style={styles.label}>Aspect ratio</Text>
            <Text style={styles.ratio}>16:9  Landscape</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.generate}
          onPress={generate}
        >
          <Text style={styles.generateText}>
            CREATE VIDEO PROJECT →
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          TYPO AI STUDIO • Custom Templates • 16:9
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0B0B12',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginTop: 20,
  },
  subtitle: {
    color: '#A1A1B5',
    fontSize: 13,
    marginTop: 7,
    marginBottom: 25,
  },
  panel: {
    backgroundColor: '#151520',
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#29293A',
  },
  heading: {
    color: '#B7A2FF',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 15,
    letterSpacing: 1,
  },
  input: {
    minHeight: 130,
    backgroundColor: '#0E0E17',
    borderRadius: 10,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#303044',
  },
  note: {
    color: '#85859A',
    fontSize: 11,
    marginTop: 10,
  },
  template: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#303044',
    borderRadius: 10,
    padding: 13,
    marginBottom: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  templateText: {
    flex: 1,
    color: '#F1F1FA',
    fontSize: 13,
    fontWeight: '600',
  },
  check: {
    color: '#C4B5FD',
    fontSize: 18,
  },
  label: {
    color: '#B8B8CC',
    fontSize: 13,
    marginBottom: 10,
    marginTop: 8,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 17,
    borderRadius: 9,
    backgroundColor: '#222231',
    borderWidth: 1,
    borderColor: '#38384D',
  },
  activeOption: {
    backgroundColor: '#38286A',
    borderColor: '#A78BFA',
  },
  optionText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  format: {
    marginTop: 5,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#303044',
  },
  ratio: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  generate: {
    backgroundColor: '#8B5CF6',
    padding: 17,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
  },
  generateText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  footer: {
    color: '#77778C',
    textAlign: 'center',
    fontSize: 10,
    marginTop: 22,
  },
});
