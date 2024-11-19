import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import React from "react";
import { View , Text,FlatList, ListRenderItem} from "react-native";


const IncomeBlock =({incomeList} : {incomeList: IncomeType[]}) => {
    const renderItem:ListRenderItem<IncomeType> = () => {
        return(
            <View>
                <Text style={{}}>{renderItem.name}</Text>
            </View>
        );
    }
    return(
        <View>
            <Text style={{color: Colors.white, fontSize: 16,}}>My <Text style={{fontWeight: 700}}>Income</Text>
            </Text>
            <FlatList data={incomeList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
        </View>
        
    )
}
export default IncomeBlock;