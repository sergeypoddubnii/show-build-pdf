'use client';
import React from 'react';
import {Document, Image, Page, StyleSheet, Text, View, Font} from "@react-pdf/renderer";
import Html from 'react-pdf-html';
import Roboto from '../../public/fonts/Roboto-Regular.ttf';

Font.register({ family: 'Roboto', src: Roboto});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: 'white',
        fontFamily: 'Roboto',
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
    },
    employmentItem: {

    },
    employmentName: {
        fontSize: 12,
        marginBottom: 5
    },
    employmentDate: {
        fontSize: 12,
        textTransform: 'uppercase',
        marginBottom: 5
    },
    employmentDescription: {
        fontSize: 12,
    },
    education: {

    },
    educationDescription: {
        fontSize: 12,
    },
    educationDate: {
        fontSize: 12,
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
                            <Html>
                                {`<ul>
                                    <li>Fast and lightweight</li>
                                    <li>Semantic markup</li>
                                    <li>Standardized HTML between browsers</li>
                                    <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
                                </ul>`}
                            </Html>
                            .NET developer with 3+ years expertise in full lifecycle of desktop/web apps,
                            from ideation to launch. Skilled in leading teams, tech solutions, and effective
                            communication. Analytical thinker for high-level problem-solving.
                        </Text>
                    </View>
                    <View style={styles.employment}>
                        <Text style={styles.subTitle}>
                            Employment History
                        </Text>
                        <View style={styles.employmentItem}>
                            <Text style={styles.employmentName}>
                                Middle to Senior C#.Net Software Engineer, Optimate
                            </Text>
                            <Text style={styles.employmentDate}>
                                O C T O B E R 2 0 2 2 — P R E S E N T
                            </Text>
                            <Text style={styles.employmentDescription}>
                                Orchestrated the conception and architecture of a sophisticated multitenant
                                application from scratch, tailored as a platform with CRM, HRM, and LMS elements
                                for language and other educational schools. Employing advanced technologies, I
                                led the entire development process, from groundwork to deployment, integrating
                                diverse features. I established and managed the infrastructure, directing technical
                                and architectural decisions within a four-developer team, including myself. In
                                addition to these responsibilities, my role encompassed handling DevOps tasks to
                                ensure the application's robustness, while meticulously maintaining comprehensive
                                documentation throughout the project's lifecycle.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.education}>
                        <Text style={styles.subTitle}>
                            Education
                        </Text>
                        <View >
                            <Text>
                                Bachelor, Kharkiv National University of Radioelectronics
                            </Text>
                            <Text style={styles.educationDate}>
                                O C T O B E R 2 0 2 2 — P R E S E N T
                            </Text>
                            <Text style={styles.educationDescription}>
                                Speciality - Computer Science
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
