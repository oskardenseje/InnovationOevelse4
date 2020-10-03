import {ScrollView, Text, View, StyleSheet} from "react-native";
import React, { Component } from 'react'

export default class ScrollViewScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <Text style={{ fontSize: 20}}> 1. ScrollViewHorizontal</Text>
                    <ScrollView horizontal={true} style={{height: 50}}>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet neque et velit
                        dictum vestibulum. Donec ante elit, ultricies in convallis eget, porta vel neque. Duis quis
                        faucibus mauris. Curabitur gravida euismod tellus. Donec nisl felis,
                        consequat vel lectus non, vestibulum volutpat ex. Aenean vitae sollicitudin risus,
                        nec condimentum arcu. Praesent et mollis felis. Mauris tristique nibh tortor, ac auctor leo
                        porttitor non. Praesent enim elit, vulputate a tellus quis, facilisis placerat mauris. Phasellus
                        gravida euismod quam blandit efficitur. Cras sit amet libero quis odio gravida ultrices nec in
                        mi.
                        Donec purus nunc, vestibulum id
                        dignissim quis, tincidunt aliquet massa. Duis augue elit, congue nec nunc nec, rutrum egestas
                        augue. Vestibulum purus purus, fermentum et tellus eu, consequat molestie ipsum. Duis sodales
                        risus a condimentum viverra. Aenean ligula risus, ultricies et sem at, aliquet dapibus arcu.
                        Quisque sed ex elit. Nunc nec nibh ultricies, rutrum tellus quis, ultrices purus. Curabitur
                        maximus augue et ex aliquet sollicitudin. Pellentesque odio augue, bibendum at semper quis,
                        faucibus sit amet nisi. Phasellus blandit dignissim enim pretium pellentesque. Quisque iaculis,
                        lacus vitae suscipit molestie, ante quam dictum felis,
                        eget vestibulum arcu ante in tortor. Mauris id sodales libero, sit amet auctor tellus.
                        Suspendisse suscipit malesuada sagittis. Phasellus congue pretium augue mattis pellentesque.
                        Aliquam sed leo id lorem vestibulum vehicula. Aliquam congue ipsum urna, a molestie ex aliquet
                        eget.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        nec condimentum arcu. Praesent et mollis felis. Mauris tristique nibh tortor, ac auctor leo
                        porttitor non. Praesent enim elit, vulputate a tellus quis, facilisis placerat mauris. Phasellus
                        gravida euismod quam blandit efficitur. Cras sit amet libero quis odio gravida ultrices nec in
                        mi.
                        nec condimentum arcu. Praesent et mollis felis. Mauris tristique nibh tortor, ac auctor leo
                        porttitor non. Praesent enim elit, vulputate a tellus quis, facilisis placerat mauris. Phasellus
                        gravida euismod quam blandit efficitur. Cras sit amet libero quis odio gravida ultrices nec in
                        mi.
                    </Text>
                </ScrollView>
                <Text>2. ScrollViewVertical</Text>
                <ScrollView style={styles.StyledView}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet neque et velit dictum
                        vestibulum. Donec ante elit, ultricies in convallis eget, porta vel neque. Duis quis faucibus
                        mauris. Curabitur gravida euismod tellus. Donec nisl felis,
                        consequat vel lectus non, vestibulum volutpat ex. Aenean vitae sollicitudin risus,
                        nec condimentum arcu. Praesent et mollis felis. Mauris tristique nibh tortor, ac auctor leo
                        porttitor non. Praesent enim elit, vulputate a tellus quis, facilisis placerat mauris. Phasellus
                        gravida euismod quam blandit efficitur. Cras sit amet libero quis odio gravida ultrices nec in
                        mi.
                        Donec purus nunc, vestibulum id
                        dignissim quis, tincidunt aliquet massa. Duis augue elit, congue nec nunc nec, rutrum egestas
                        augue. Vestibulum purus purus, fermentum et tellus eu, consequat molestie ipsum. Duis sodales
                        risus a condimentum viverra. Aenean ligula risus, ultricies et sem at, aliquet dapibus arcu.
                        Quisque sed ex elit. Nunc nec nibh ultricies, rutrum tellus quis, ultrices purus. Curabitur
                        maximus augue et ex aliquet sollicitudin. Pellentesque odio augue, bibendum at semper quis,
                        faucibus sit amet nisi. Phasellus blandit dignissim enim pretium pellentesque. Quisque iaculis,
                        lacus vitae suscipit molestie, ante quam dictum felis,
                        eget vestibulum arcu ante in tortor. Mauris id sodales libero, sit amet auctor tellus.
                        Suspendisse suscipit malesuada sagittis. Phasellus congue pretium augue mattis pellentesque.
                        Aliquam sed leo id lorem vestibulum vehicula. Aliquam congue ipsum urna, a molestie ex aliquet
                        eget.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        Nunc non massa et sem convallis vehicula. Pellentesque a nibh enim. Fusce blandit enim mi, nec
                        vehicula lorem suscipit et.
                        nec condimentum arcu. Praesent et mollis felis. Mauris tristique nibh tortor, ac auctor leo
                        porttitor non. Praesent enim elit, vulputate a tellus quis, facilisis placerat mauris. Phasellus
                        gravida euismod quam blandit efficitur. Cras sit amet libero quis odio gravida ultrices nec in
                        mi.
                        nec condimentum arcu. Praesent et mollis felis. Mauris tristique nibh tortor, ac auctor leo
                        porttitor non. Praesent enim elit, vulputate a tellus quis, facilisis placerat mauris. Phasellus
                        gravida euismod quam blandit efficitur. Cras sit amet libero quis odio gravida ultrices nec in
                        mi.
                    </Text>
                </ScrollView>
            </View>
        )
    }
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding:50,
        },
        StyledView:{
            height:150,
        }
    });


