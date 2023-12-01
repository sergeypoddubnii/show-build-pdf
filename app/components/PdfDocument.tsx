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
        gap: 12,
        marginBottom: 20
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
    },
    profile: {
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    profileDescription: {
        fontSize: 14
    },
    employment: {
        marginBottom: 20
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
                    <View style={styles.profile}>
                        <Text style={styles.subTitle}>
                            Profile
                        </Text>
                        <Text style={styles.profileDescription}>
                            .NET developer with 3+ years expertise in full lifecycle of desktop/web apps,
                            from ideation to launch. Skilled in leading teams, tech solutions, and effective
                            communication. Analytical thinker for high-level problem-solving.
                        </Text>
                    </View>
                    <View style={styles.employment}>
                        <Text style={styles.subTitle}>
                            Employment History
                        </Text>
                    </View>
                </View>


                <View style={styles.additional}>

                </View>
            </Page>
        </Document>
    )
};

export default PdfDocument;
