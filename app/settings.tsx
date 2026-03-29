import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

type EntryItem = {
  icon: React.ReactNode;
  label: string;
  options: string[];
  onPress?: () => void;
};


const SettingsIcon_Size = 20;
const SettingsIcon_Color = "#ffffff";

const UnitSettings: EntryItem[] = [
  {
    icon: <Ionicons name="thermometer-outline" size={SettingsIcon_Size} color={SettingsIcon_Color}/>, 
    label: "Temperature:",
    options: ["Fahrenheit", "Celsius"],
  },
  {
    icon: <Ionicons name="globe-outline" size={SettingsIcon_Size} color={SettingsIcon_Color} />, 
    label: "Unit of Measurement:",
    options: ["Imperial", "Metric", "Nautical"],
  },
  {
    icon: <Ionicons name="logo-apple-ar" size={SettingsIcon_Size} color={SettingsIcon_Color} />, 
    label: "Augmented Reality (Alpha):",
    options: ["Enabled", "Disabled"],
  },
  {
    icon: <Ionicons name="sparkles-outline" size={SettingsIcon_Size} color={SettingsIcon_Color} />, 
    label: "3D Model Quality:",
    options: ["Performance", "Quality"],
  },
];


const CustomizationSettings: EntryItem[] = [
  {
    icon: <Ionicons name="color-fill-outline" size={SettingsIcon_Size} color={SettingsIcon_Color}/>, 
    label: "Theme:",
    options: ["Dark", "Light", "Auto"],
  },
  {
    icon: <Ionicons name="map-outline" size={SettingsIcon_Size} color={SettingsIcon_Color} />, 
    label: "Map Style:",
    options: ["Simple", "3D"],
  },
  {
    icon: <Ionicons name="cube-outline" size={SettingsIcon_Size} color={SettingsIcon_Color} />, 
    label: "App Icon:",
    options: ["Default", "Light", "Wireframe", "Normal"],
  },
];


const AboutIcon_Size = 20;
const AboutIcon_Color = "#ffffff";


const AboutItems: EntryItem[] = [
  {
    icon: <Feather name="arrow-up-right" size={AboutIcon_Size} color={AboutIcon_Color} />, 
    label: "Developer: TheMrSnoop",
    options: [],
  },
  {
    icon: <Feather name="arrow-up-right" size={AboutIcon_Size} color={AboutIcon_Color} />, 
    label: "Version: 0.1.0",
    options: [],
  },
  {
    icon: <Feather name="arrow-up-right" size={AboutIcon_Size} color={AboutIcon_Color} />, 
    label: "Website",
    options: [],
  },
];


// --- Segmented Control Component ---
function SegmentedControl({ options, selected, onSelect }: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <View style={styles.track}>
      {options.map((option) => (
        <TouchableOpacity key={option} style={[styles.segment, selected === option && styles.activeSegment]} onPress={() => onSelect(option)} activeOpacity={0.8}>
          <Text style={[styles.segmentLabel, selected === option && styles.activeSegmentLabel]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

// Reusable row component
function SettingsRow({ icon, label, options, selected, onSelect, onPress }: EntryItem & {selected: string; onSelect: (value: string) => void;})
{
  return (
    <View style={styles.row}>
      <View style={styles.rowTextContent}>
        {icon}
        <Text style={styles.rowLabel}>{label}</Text>
      </View>
      <SegmentedControl options={options} selected={selected} onSelect={onSelect} />
    </View>
  );
}

function SettingsSection({
  title,
  items,
  selections, 
  onSelect
}: {
  title: string;
  items: EntryItem[];
  selections: Record<string, string>;
  onSelect: (label: string, value: string) => void;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item, index) => (
        <View key={item.label}>
          <SettingsRow {...item} selected={selections[item.label] ?? item.options[0]} onSelect={(value) => onSelect(item.label, value)} />
          {index < items.length - 1 && <View style={styles.separator} />}
        </View>
      ))}
    </View>
  );
}

export default function Settings() {

  const initialSelections = (items: EntryItem[]) =>
    Object.fromEntries(items.map((i) => [i.label, i.options[0] ?? ""]));

  const [unitSelections, setUnitSelections] = useState<Record<string, string>>(
    initialSelections(UnitSettings)
  );

  const handleUnitSelect = (label: string, value: string) => {
    setUnitSelections((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SettingsSection title="Settings_" items={UnitSettings} selections={unitSelections} onSelect={handleUnitSelect} />
      <SettingsSection title="Customization_" items={CustomizationSettings} selections={unitSelections} onSelect={handleUnitSelect} />
      <SettingsSection title="About_" items={AboutItems} selections={{}} onSelect={() => {}}/>
      <Text style={styles.footerText}>This app was Lowkirkenuninely made by a single person, so like expect hella bugs frr</Text >
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
  },
  content: {
    padding: 24,
    gap: 32, // space between sections
  },
  section: {
    gap: 0,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: 32,
    fontFamily: "DMMono_400Regular",
    marginBottom: 20,
  },
  row: {
    display: "flex",
    borderColor: "#ffffff00",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  rowIcon: {
    opacity: 0.85
  },
  rowTextContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  rowLabel: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "DMMono_300Light",
    paddingLeft: 10
  },
  separator: {
    height: StyleSheet.hairlineWidth, // thinnest possible line on the device
    backgroundColor: "#303030",
  },
  track: {
    flexDirection: "row",
    backgroundColor: "#1e1e1e",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#3a3a3a",
    padding: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 0,
  },
  activeSegment: {
    backgroundColor: "#ffffff",
  },
  segmentLabel: {
    color: "#888",
    fontSize: 14,
    fontFamily: "DMMono_400Regular",
  },
  activeSegmentLabel: {
    color: "#000000",
  },
  footerText: {
    color: "#ffffff",
    fontSize: 11,
    fontFamily: "DMMono_300Light",
    paddingLeft: 2
  }
});
