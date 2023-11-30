'use client';
import React from 'react';
import {Document, Image, Page, StyleSheet, Text, View} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    general: {
        padding: 10,
        width: '75%'
    },
    additional: {
        width: '25%',
        backgroundColor: 'green'
    },
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        gap: 12
    },
    fullName: {
        fontSize: 22,
    },
    position: {
        fontSize: 12
    },
    avatar: {
        width: 40,
        height: 40,
        border: 1,
        borderRadius: '50%'
    }

});

const PdfDocument = () => {
    return (
        <Document>
            <Page
                size="A4"
                style={styles.page}
            >
                <View style={styles.general}>
                    <View style={styles.header}>
                        <Image
                            style={styles.avatar}
                            src={'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1170417494.jpg?crop=1xw:1.0xh;center,top&resize=640:*'}
                        />
                        <View>
                            <Text style={styles.fullName}>
                                Serhii Piddubnii
                            </Text>
                            <Text style={styles.position}>
                                front-end developer
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={styles.additional}>

                </View>
            </Page>
        </Document>
    )
};

export default PdfDocument;
