import { MinLength } from 'class-validator';
import { Field, ArgsType, Int } from '@nestjs/graphql';

@ArgsType()
export class GetPostArgs {
    @Field(type => Int, { nullable: true })
    authorId?: number;

}