import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default function Quotepanel() {
  return (
    <View style={styles.panel}>
      <Text styles={styles.quoteText}>
        "A úninca maneira de fazer um exelente trabalho é amar o que você faz."
      </Text>
      <Image
          source= {{ uri: c:\Users\gabri\Pictures\Ti.jpg .com/100' }}
            style={styles.authorName}
            />
            <Text style={styles.authorName}>- Steve Jobs</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10, 
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20, 
  },
  quoteText: {
    
  }
 
  },
});
