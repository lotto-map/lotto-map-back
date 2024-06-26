import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { LottoStore } from './lotto-store.entity';

@Entity({ name: 'winning_info' })
export class WinningInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', default: 0, nullable: true })
    draw_no: number;

    @Column({ type: 'int', default: 0, nullable: true })
    rank: number;

    @Column({ type: 'varchar', length: 10, nullable: true })
    category: string;

    @ManyToOne(() => LottoStore, store => store.winningInfo)
    @JoinColumn({ name: 'store_id' })
    store: LottoStore;
    
    @Column({ nullable: false })
    store_id: number;
}