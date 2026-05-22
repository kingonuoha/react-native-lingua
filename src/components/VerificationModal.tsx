import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  visible: boolean;
  onRequestClose: () => void;
  onVerify?: (
    code: string,
  ) =>
    | Promise<boolean | { success: boolean; message?: string } | void>
    | boolean
    | { success: boolean; message?: string }
    | void;
};

export default function VerificationModal({
  visible,
  onRequestClose,
  onVerify,
}: Props) {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const inputs = useRef<Array<TextInput | null>>([]);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (visible) {
      setCode(["", "", "", "", "", ""]);
      setTimeout(() => inputs.current[0]?.focus(), 250);
    }
  }, [visible]);

  function handleChange(text: string, idx: number) {
    const digit = text.replace(/[^0-9]/g, "");
    if (!digit) return;
    const next = [...code];
    next[idx] = digit.charAt(digit.length - 1);
    setCode(next);
    if (idx < 5) {
      inputs.current[idx + 1]?.focus();
    } else {
      // last digit entered — assemble code and call verify callback if provided
      const fullCode = next.join("");
      // small delay to show last digit
      setTimeout(async () => {
        if (!onVerify) {
          // fallback behavior: navigate home and close
          onRequestClose();
          router.push("/");
          return;
        }

        setIsVerifying(true);
        setErrorMessage(null);
        try {
          const result = await onVerify(fullCode);

          const ok =
            result === true ||
            (typeof result === "object" && (result as any)?.success === true);
          const message =
            typeof result === "object" ? (result as any)?.message : undefined;

          if (ok) {
            onRequestClose();
          } else {
            setErrorMessage(
              message || "Invalid verification code. Please try again.",
            );
            // clear inputs and focus first
            setCode(["", "", "", "", "", ""]);
            setTimeout(() => inputs.current[0]?.focus(), 50);
          }
        } catch (err: any) {
          setErrorMessage(
            err?.message || "Verification failed. Please try again.",
          );
          setCode(["", "", "", "", "", ""]);
          setTimeout(() => inputs.current[0]?.focus(), 50);
        } finally {
          setIsVerifying(false);
        }
      }, 200);
    }
  }

  function handleKeyPress(
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    idx: number,
  ) {
    if (e.nativeEvent.key === "Backspace") {
      if (code[idx]) {
        const next = [...code];
        next[idx] = "";
        setCode(next);
      } else if (idx > 0) {
        inputs.current[idx - 1]?.focus();
      }
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.sheet}>
          <Text style={styles.title}>Enter verification code</Text>
          <Text style={styles.subtitle}>
            We sent a 6-digit code to your email.
          </Text>

          <View style={styles.inputsRow}>
            {code.map((v, i) => (
              <TextInput
                ref={(ref) => {
                  inputs.current[i] = ref;
                }}
                key={i}
                value={v}
                onChangeText={(t) => handleChange(t, i)}
                onKeyPress={(e) => handleKeyPress(e, i)}
                keyboardType={Platform.OS === "ios" ? "number-pad" : "numeric"}
                maxLength={1}
                style={styles.input}
                textContentType="oneTimeCode"
                returnKeyType="done"
              />
            ))}
          </View>

          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          {isVerifying ? (
            <Text style={styles.verifyingText}>Verifying...</Text>
          ) : null}

          <TouchableOpacity style={styles.closeButton} onPress={onRequestClose}>
            <Text style={styles.closeText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end" },
  sheet: {
    backgroundColor: "white",
    padding: 24,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 10,
  },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 6 },
  subtitle: { fontSize: 14, color: "#6b6b6b", marginBottom: 16 },
  inputsRow: { flexDirection: "row", justifyContent: "space-between" },
  input: {
    width: 48,
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    textAlign: "center",
    fontSize: 20,
  },
  closeButton: { marginTop: 18, alignItems: "center" },
  closeText: { color: "#374151", fontWeight: "600" },
  errorMessage: { color: "#b91c1c", marginTop: 12 },
  verifyingText: { color: "#374151", marginTop: 8, fontStyle: "italic" },
});
