# Load keystore information from environment
export $(cat .env | xargs)

export REACT_NATIVE_JS_DIR=android/app/src/main/assets
export REACT_NATIVE_ASSETS_DIR=android/app/src/main/res

react-native bundle \
  --platform android --dev false \
  --entry-file index.js \
  --bundle-output "$REACT_NATIVE_JS_DIR/index.android.bundle" \
  --assets-dest "$REACT_NATIVE_ASSETS_DIR"
cd android && ./gradlew assembleRelease
