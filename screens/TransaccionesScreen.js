
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons'; // Para los íconos

export default function TransaccionesScreen() {
  const transacciones = Array(8).fill({
    categoria: 'Escuela',
    fecha: '22 de mayo',
    monto: '$91.00',
  });

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.title}>Transacciones</Text>
        <Text style={styles.subtitle}>Septiembre 2025</Text>
        <MaterialIcons name="settings" size={22} color="#fff" style={styles.iconConfig} />
      </View>

      {/* Lista de transacciones */}
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Categorías ▼</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          {transacciones.map((item, index) => (
            <View key={index} style={styles.transactionRow}>
              <View>
                <Text style={styles.transactionTitle}>{item.categoria}</Text>
                <Text style={styles.transactionDate}>{item.fecha}</Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.transactionAmount}>{item.monto}</Text>
                <View style={styles.iconos}>
                  <Feather name="trash-2" size={18} color="#0E7369" />
                  <Feather name="edit-3" size={18} color="#0E7369" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Barra inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButtonActive}>
          <MaterialIcons name="list" size={20} color="#0E7369" />
          <Text style={styles.footerTextActive}>Lista</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Feather name="bar-chart-2" size={20} color="#0E7369" />
          <Text style={styles.footerText}>Gráficas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <Feather name="plus-circle" size={20} color="#0E7369" />
          <Text style={styles.footerText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B9E0DF',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#0E7369',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    position: 'relative',
  },
  iconConfig: {
    position: 'absolute',
    right: 20,
    top: 55,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 15,
    padding: 15,
    marginTop: -20,
    flex: 1,
  },
  categoryButton: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 15,
  },
  categoryText: {
    color: '#0E7369',
    fontWeight: '500',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
  },
  transactionTitle: {
    color: '#0E7369',
    fontWeight: 'bold',
    fontSize: 15,
  },
  transactionDate: {
    color: '#6B8B8B',
    fontSize: 13,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionAmount: {
    color: '#0E7369',
    fontWeight: 'bold',
    marginRight: 10,
  },
  iconos: {
    flexDirection: 'row',
    gap: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#D8EEED',
    width: '100%',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonActive: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 15,
  },
  footerText: {
    color: '#0E7369',
    marginTop: 2,
    fontSize: 13,
  },
  footerTextActive: {
    color: '#0E7369',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
